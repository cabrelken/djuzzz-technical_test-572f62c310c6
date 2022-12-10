<template>
  <div>
		<el-form>
			<Form
				class="form"
				as="el-form"
				novalidate="novalidate"
				@submit="submit"
				:validation-schema="validationSchema"
			>
				<div class="mb-4 fv-row">
					<label class="form-label required"
						>Nom de la formation</label
					>
					<Field
						name="name"
						v-model="training.name"
					>
						<el-form-item class="mb-0">
								<el-input
									v-model="training.name"
									placeholder="Nom de la formation"
								/>
						</el-form-item>
					</Field>
					<ErrorMessage
						name="name"
						class="fv-plugins-message-container invalid-feedback"
					></ErrorMessage>
				</div>

				<div class="mb-4 fv-row">
					<label class="form-label required"
						>Couleur de la formation</label
					>
					<Field name="color" v-model="training.color">
						<el-form-item class="m-0">
							<el-color-picker
								v-model="training.color"
								:predefine="predefineColors"
							>
							</el-color-picker>
						</el-form-item>
					</Field>
					<ErrorMessage
						name="color"
						class="fv-plugins-message-container invalid-feedback"
					></ErrorMessage>
				</div>

				<div class="mb-4 fv-row">
					<label class="form-label required w-100"
						>Prix de la formation</label
					>
					<Field
						name="price"
						v-model="training.price"
					>
						<el-input-number
							v-model="training.price"
							:min="0"
							:precision="2"
							:controls="false"
							class="width:100%"
						/>
					</Field>
					<ErrorMessage
						name="price"
						class="fv-plugins-message-container invalid-feedback"
					></ErrorMessage>
				</div>

				<div class="mb-4 fv-row">
					<label class="form-label required w-100">
						Utilisateurs participants à la formation
					</label
					>
					<Field
						name="users"
						v-model="training.users"
					>
						<el-select
							name="users"
							v-model="training.users"
							loading-text="Chargement ..."
							clearable
							filterable
							multiple
							collapse-tags
							placeholder="[Liste des utilisateurs]"
						>
							<el-option
								v-for="item in users"
								:key="item.id"
								:label="item.name"
								:value="item.id"
							>
								{{ item.name }}
							</el-option>
						</el-select>
					</Field>
					<ErrorMessage
						name="users"
						class="fv-plugins-message-container invalid-feedback"
					></ErrorMessage>
				</div>

				<div class="text-end">
					<button type="submit" class="btn btn-sm btn-success">
						Ajouter
						<span class="svg-icon svg-icon-4 ms-1 me-0">
							<inline-svg
								src="/media/icons/duotone/Navigation/Double-check.svg"
							/>
						</span>
					</button>
				</div>
			</Form>
				
		</el-form>
	</div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as Yup from "yup";
import { fr } from 'yup-locales';
import { setLocale } from 'yup';
import axios from "axios";
setLocale(fr);

export default defineComponent({
	name:"AddTraining",
	components:{
		Form,
		Field,
		ErrorMessage
	},
	setup(props, {emit}){
		const users = ref([]);

		const training = ref({
			name:"",
			color:"",
			price:0,
			users:[]
		});

		const predefineColors = ref([
			"#ff4500",
			"#ff8c00",
			"#ffd700",
			"#90ee90",
			"#00ced1",
			"#1e90ff",
			"#c71585",
		]);

		const validationSchema = Yup.object().shape({
			name: Yup.string().required().label("Le nom"),
			color: Yup.string().required().label("La couleur"),
			price: Yup.number().positive().label("Le prix"),
		});

		onMounted(()=>{
			getUsers();
		})

		const getUsers = function(){
			axios.get('user')
			.then((response)=>{
				let res = response.data;
				users.value = res;
			})
		}

		const submit = function(values, { resetForm }){
			//[Axios add new training + emit new training + resetForm()]
			resetForm();
		}

		return{
			training,
			predefineColors,
			validationSchema,
			users,
			getUsers,
			submit
		}
	}
})
</script>

<style>

</style>
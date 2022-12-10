<template>
  <div>
    <div class="row">
      <div class="col-3">
        <PriceBox :price="'[Total price of ALL trainings]'" 
          :text="'[Number of ALL trainings]'+' factures existantes'" 
          :subText="'Prix total'"
          class_style="bg-primary"
          />
      </div>
      <div class="col-3">
        <PriceBox :price="'[Average price of ALL trainings]'" 
          :text="'[Number of ALL trainings]'+' factures existantes'" 
          :subText="'Prix moyen'"
          class_style="bg-warning"
          />
      </div>
      <div class="col-3">
        <PriceBox :price="'[Total price of ACTIVE trainings]'" 
          :text="'[Number of ACTIVE trainings]'+' factures actives'" 
          :subText="'Prix total'"
          class_style="bg-success"
          />
      </div>
      <div class="col-3">
        <PriceBox :price="'[Average price of ACTIVE trainings]'" 
          :text="'[Number of ACTIVE trainings]'+' factures actives'" 
          :subText="'Prix moyen'"
          class_style="bg-danger"
          />
      </div>
    </div>

    <div class="d-flex justify-content-between">
      <!-- SHOW the modal to ADD a new training -->
      <button class="btn btn-sm btn-success my-3"
        @click="addTraining">
        <span class="svg-icon svg-icon-1 svg-icon-primary me-3">
          <inline-svg src="/media/icons/duotone/Home/Library.svg" />
        </span>Ajouter une formation
      </button>
      <!-- SWITCH between active trainings and inactive trainings -->
      <button class="btn btn-sm btn-warning btn-icon my-3"
        @click="switchStatus">
        <span class="svg-icon svg-icon-2x">
          <inline-svg src="media/icons/duotone/Media/Repeat.svg" />
        </span>
      </button>
    </div>
    
    <div class="card shadow-sm">
      <div class="card-header">
        <div v-if="training_status == 1" class="card-title"><span>Formations <span class="text-success fw-bold"> activés</span></span></div>
        <div v-else class="card-title"><span> Formations <span class="text-danger fw-bold"> désactivés</span></span></div>
      </div>
      <div class="card-body">
        <table class="table table-row-dashed table-fixed align-middle gy-4 my-0 pb-3">
          <thead>
            <tr class="fw-bolder text-muted text-center">
              <th>Nom</th>
              <th>Couleur</th>
              <th>Statut</th>
              <th>Prix</th>
              <th>Nombre d'utilisateur(s)</th>
              <th>Action</th>
            </tr>
          </thead>
          
          <tbody>
              <tr v-for="training in trainings" :key="training.id" class="text-center">
                <td>{{training.name}}</td>
                <td>
                  <div class="d-flex justify-content-center">
                    <!-- Color of the training -->
                      <div class="w-25px h-25px border border-1" style="width:25px; height:25px;" :style="'background-color:'+'black'"></div>
                  </div>
                </td>
                <td>
                  <!-- [IF training is_active == 1] -->
                  <div v-if="training.is_active == 1 " class="badge badge-sm badge-success">Activé</div>
                  <!-- [IF training is_active == 0] -->
                  <div v-else-if ="training.is_active == 0" class="badge badge-sm badge-danger">Desactivé</div>
                </td>
                <td>{{training.price}}Є</td>
                <td>[Number of training's users]</td>
                <td>
                  <!-- [IF training is_active == 1] -->
                  <button
                    class="btn-bg-light btn-icon-danger btn-active-danger btn btn-sm align-content-center me-1 p-2"
                    @click="deleteTraining(training.id)">
                    <span class="svg-icon svg-icon-2 me-0">
                      <inline-svg src="media/icons/duotone/General/Trash.svg" />
                    </span>
                  </button>

                  <!-- [IF training is_active == 0] -->
                  <button
                    class="btn-bg-light btn-icon-success btn-active-success btn btn-sm align-content-center me-1 p-2"
                    @click="activateTraining(training)">
                    <span class="svg-icon svg-icon-2 me-0">
                      <inline-svg src="media/icons/duotone/Navigation/Check.svg" />
                    </span>
                  </button>
                </td>
              </tr>
            
          </tbody>
        </table>
      </div>
    </div>
    <Modal ref="trainingModal">
      <template v-slot:header>
        <h2>
          <span class="svg-icon svg-icon-2x svg-icon-success me-3">
            <inline-svg src="/media/icons/duotone/Home/Library.svg" />
          </span> Ajout d'une formation
        </h2>
        <div class="btn btn-sm btn-icon btn-active-color-primary"
          @click="close()"
        >
          <span class="svg-icon svg-icon-1">
            <inline-svg src="/media/icons/duotone/Navigation/Close.svg" />
          </span>
        </div>
      </template>

      
      <template v-slot:body>
        <AddTraining @trainingAdded="handleNewTraining"/>
      </template>
      <template v-slot:footer>
        <div></div>
      </template>
    </Modal>
    
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { computed, defineComponent, onMounted, ref } from "vue";
import PriceBox from "@/components/PriceBox.vue";
import Modal from "@/components/FinalModal.vue";
import AddTraining from "@/pages/form/AddTraining.vue";

export default defineComponent({
  name:"Training",
  components:{
    PriceBox,
    Modal,
    AddTraining
  },
  setup(){
    const trainings = ref([]);
    const trainingModal = ref(null);
    const training_status = ref(1);

    onMounted(()=>{
      getTrainings();
    })

    const activeTrainings = computed(()=>{
      return trainings.value.filter((training:any) => training.is_active == 1);
    })

    const getTrainings = function(){
      axios.get('api/trainings')
      .then((response)=>{
        let res = response.data;
        trainings.value = res;
      })
    }

    const deleteTraining = function(id){
      axios.delete('training/'+id)
      .then((response)=>{
        let training = response.data;
        trainings.value = trainings.value.map((obj:any) => training.id === obj.id ? training : obj);
      });
    }

    const addTraining = function(){
      trainingModal.value.show();
    }

    const close = function(){
      trainingModal.value.close();
    }

    const handleNewTraining = function(training){
      trainings.value.push(training);
      close();
    }

    const switchStatus = function(){
      if(training_status.value == 1){
        training_status.value = 0;
      }else{
        training_status.value = 1;
      }
    }

    const activateTraining = function(training){
      training.is_active = 1;
      axios.put('training/'+training.id, training)
      .then((response)=>{
        let training = response.data;
        trainings.value = trainings.value.map((obj:any) => training.id === obj.id ? training : obj);
      })
    }
    

    return{
      trainings,
      activeTrainings,
      trainingModal,
      training_status,
      getTrainings,
      deleteTraining,
      addTraining,
      close,
      handleNewTraining,
      switchStatus,
      activateTraining
    }
  }
})
</script>

<style>

</style>
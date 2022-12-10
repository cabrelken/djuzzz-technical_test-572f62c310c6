<template>
  <div>
    <h1 class="mb-5">Utilisateurs</h1>
    <div class="row g-6 g-xl-9">
      <UserCard v-for="user in users" :key="user.id" 
        :name=user.name
        position="Utilisateur"
        :initials="'[initials of user]'"
        :nbTraining="'[Number of user\'s training]'"
        :priceTrainingTotal="'[Sum of user\'s training\'s price]'+' €'"
      ></UserCard>
      <UserCard
        :name="'[User name]'"
        position="Utilisateur"
        :initials="'[initials of user]'"
        :nbTraining="'[Number of user\'s training]'"
        :priceTrainingTotal="'[Sum of user\'s training\'s price]'+' €'"
      ></UserCard>
      <UserCard
        :name="'[User name]'"
        position="Utilisateur"
        :initials="'[initials of user]'"
        :nbTraining="'[Number of user\'s training]'"
        :priceTrainingTotal="'[Sum of user\'s training\'s price]'+' €'"
      ></UserCard>
      <UserCard
        :name="'[User name]'"
        position="Utilisateur"
        :initials="'[initials of user]'"
        :nbTraining="'[Number of user\'s training]'"
        :priceTrainingTotal="'[Sum of user\'s training\'s price]'+' €'"
      ></UserCard>
      <UserCard
        :name="'[User name]'"
        position="Utilisateur"
        :initials="'[initials of user]'"
        :nbTraining="'[Number of user\'s training]'"
        :priceTrainingTotal="'[Sum of user\'s training\'s price]'+' €'"
      ></UserCard>
      <UserCard
        :name="'[User name]'"
        position="Utilisateur"
        :initials="'[initials of user]'"
        :nbTraining="'[Number of user\'s training]'"
        :priceTrainingTotal="'[Sum of user\'s training\'s price]'+' €'"
      ></UserCard>
      <UserCard
        :name="'[User name]'"
        position="Utilisateur"
        :initials="'[initials of user]'"
        :nbTraining="'[Number of user\'s training]'"
        :priceTrainingTotal="'[Sum of user\'s training\'s price]'+' €'"
      ></UserCard>
      <UserCard
        :name="'[User name]'"
        position="Utilisateur"
        :initials="'[initials of user]'"
        :nbTraining="'[Number of user\'s training]'"
        :priceTrainingTotal="'[Sum of user\'s training\'s price]'+' €'"
      ></UserCard>
      <UserCard
        :name="'[User name]'"
        position="Utilisateur"
        :initials="'[initials of user]'"
        :nbTraining="'[Number of user\'s training]'"
        :priceTrainingTotal="'[Sum of user\'s training\'s price]'+' €'"
      ></UserCard>

    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent, onMounted, ref } from "vue";
import UserCard from "@/components/UserCard.vue";
export default defineComponent({
  name:"User",
  components:{
    UserCard
  },
  setup(){
    const users = ref([]);

    onMounted(()=>{
      getUsers();
    })
    
    const getUsers = function(){
     axios.get('api/users')
      .then((response)=>{
        let res = response.data;
        users.value = res;
      }).catch((err) => {
        console.log(err);
      });
    }


    return{
      users,
      getUsers
    }
  }
})
</script>

<style>

</style>
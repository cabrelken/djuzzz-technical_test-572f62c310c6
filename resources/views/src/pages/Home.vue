<template>
  <div class="card shadow-sm">
    <div class="card-header">
      <span class="card-title">Test technique</span>
    </div>

    <div class="card-body">
      <p>Ce test vise à evaluer le participant sur ses connaissances téchniques en Laravel et Vuejs.</p>
      <p>Une migration ainsi qu'un seeder ont été mis en place : il vous suffit de lancer la commande <code>php artisan migrate:fresh --seed</code></p>
      <p>Voici le modèle conceptuel de la base de données fournies : </p>
      <div class="text-center my-5">
        <el-image class="rounded-1 w-50 border-dashed"
        src="media/images/MCD.png" :fit="'cover'" :preview-src-list="['media/images/MCD.png']"/>
      </div>

        Celui-ci est constitué de : 
        <ul>
          <li>
            2 pages : 
            <router-link :to="{ name:`training` }" class="text-primary fw-bold"> Formation </router-link>
            et 
            <router-link :to="{ name:`user` }" class="text-primary fw-bold"> Utilisateur </router-link>
            (Situés dans le dossier 'pages' <code>resources/views/src/pages</code>)
          </li>

          <li>1 formulaire d'ajout de formation : <code>resources/views/src/pages/form/AddTraining.vue</code></li>
          <li>1 controller : <code>app/Http/Controllers/TrainingController.php</code></li>
          <li>2 modèles : <code>app/Models/Training.php</code>, <code>app/Models/User.php</code></li>
        </ul>

        <p class="fw-bold">Le but de ce projet est d'afficher la liste des formations (avec des statistiques) et la liste des utilisateurs</p>

      <el-divider/>
      <h2 class="fw-bolder mb-5 text-primary">Formation</h2>
      <div class="ms-3">
        <p>Cette page est composé de 2 elements : </p>
        <ul>
          <li>
            Une partie <span class="fw-bold">statistique</span>
          </li>
          <li>
            Une partie <span class="fw-bold">tableau de données</span>
          </li>
        </ul>
        <h3 class="fw-bolder mb-5">Statistique</h3>
        <div class="ms-3">
          Cette partie est composé en 4 blocs de statistiques. Ces blocs sont un <span class="fw-bold">component</span> fourni : <code>resources/views/src/components/PriceBox.vue</code>
           <div class="text-center my-5">
            <el-image class="rounded-1 w-100 border-dashed"
            src="media/images/Statistique.png" :fit="'cover'" :preview-src-list="['media/images/Statistique.png']"/>
          </div>
          
          <p>Le <span class="fw-bold">1er bloc</span> affiche la <span class="fw-bolder">somme</span> des prix de <span class="fw-bolder">toutes les formations (active et inactive)</span>. Il affiche egalement le nombre total de formations.</p>
          <p>Le <span class="fw-bold">2ème bloc</span> affiche la <span class="fw-bolder">moyenne</span> des prix de <span class="fw-bolder">toutes les formations (active et inactive)</span>. Il affiche egalement le nombre total de formations.</p>
          <p>Le <span class="fw-bold">3ème bloc</span> affiche la <span class="fw-bolder">somme</span> des prix des <span class="fw-bolder">formations actives seulement</span>. Il affiche egalement le nombre de formations <span class="fw-bolder">actives</span>.</p>
          <p>Le <span class="fw-bold">4ème bloc</span> affiche la <span class="fw-bolder">moyenne</span> des prix des <span class="fw-bolder">formations actives seulement</span>. Il affiche egalement le nombre de formations <span class="fw-bolder">actives</span>.</p>
        </div>
        <el-divider border-style="dashed" />
        <h3 class="fw-bolder mb-5 mt-5">Tableau de données</h3>
        <div class="ms-5">
          Cette partie est composé de <span class="fw-bolder">2 boutons</span>, d'un <span class="fw-bolder">tableau de données</span> et d'un <span class="fw-bolder">formulaire d'ajout</span>.
           <div class="d-flex flex-row my-5 gap-5">
            <el-image class="rounded-1 border-dashed"
            src="media/images/Tableau.png" :fit="'contain'" :preview-src-list="['media/images/Tableau.png']"/>
            <el-image class="rounded-1 border-dashed"
            src="media/images/Tableau_inactive.png" :fit="'contain'" :preview-src-list="['media/images/Tableau_inactive.png']"/>
          </div>
            
          <p>Le tableau de données affiche la liste des formation (Nom, couleur, Status Prix, Nombre d'utilisateur participant à la formation).</p>
          <p>Le <span class="fw-bold">2ème bouton (<span class="text-warning">orange</span>)</span> permet de toggle entre l'affichage des formation actives et inactives</p>
          <p>Le <span class="fw-bold">1er bouton (<span class="text-success">vert</span>)</span> affiche un formulaire d'ajout </p>
          <div class="text-center my-5">
            <el-image class="rounded-1 w-50 border-dashed"
            src="media/images/Formulaire.png" :fit="'cover'" :preview-src-list="['media/images/Formulaire.png']"/>
          </div>

          <p>Le formulaire est composé du nom de la formation, la couleur de la formation, le prix de la formation et la liste des utiliateurs participant à la formation. Il faut ajouter la formation au tableau de données après son ajout.</p>
        </div>
        
      </div>
      <el-divider />
      <h2 class="fw-bolder my-5 text-primary">Utilisateurs</h2>
      <div class="ms-5">
        <p>Cette page consiste à l'affichage des utilisateurs sous forme de blocs. Ces blocs sont un <span class="fw-bold">component</span> fourni : <code>resources/views/src/components/UserCard.vue</code></p>
        <div class="text-center my-5">
          <el-image class="rounded-1 w-50 border-dashed"
          src="media/images/Utilisateurs.png" :fit="'cover'" :preview-src-list="['media/images/Utilisateurs.png']"/>
        </div>

        <p>Chaque bloc est composé de <span class="fw-bolder">4 données</span> : </p>
        <ul>
          <li>Les <span class="fw-bolder">initials</span> de l'utilisateur (première lettre de chaque mot du nom de l'utilisateur).</li>
          <li>Le <span class="fw-bolder">nom</span> de l'utilisateur.</li>
          <li>Le <span class="fw-bolder">nombre de formation</span> auxquelles l'utilisateur participe.</li>
          <li>La <span class="fw-bolder">somme des prix</span> des formations auxquelles l'utilisateur participe.</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name:"Home",
  setup(){

    return{

    }
  }
})
</script>

<style>

</style>
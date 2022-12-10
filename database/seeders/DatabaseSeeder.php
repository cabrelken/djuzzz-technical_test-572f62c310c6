<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Training;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        User::factory(10)->create();
        Training::factory(10)->create();
        
        foreach (User::all() as $user) {
            $rand = rand(0,3);
            $listRandNumber = array();
            for($i = 0; $i<$rand; $i++){
                $rand_id = rand(1,10);
                while(in_array($rand_id, $listRandNumber)){
                    $rand_id = rand(1,10);
                }
                $listRandNumber[] = $rand_id;

                DB::table('training_user')->insert([
                    'user_id' => $user->id,
                    'training_id' => $rand_id
                ]);
            }
            
        }
    }
}

<?php

namespace Database\Factories;

use App\Models\Training;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class TrainingFactory extends Factory
{
    /**
    * The name of the factory's corresponding model.
    *
    * @var  string
    */
    protected $model = Training::class;

    /**
    * Define the model's default state.
    *
    * @return  array
    */
    public function definition(): array
    {
        return [
            'name' => $this->faker->word(),
            'color' => $this->faker->hexColor(),
            'price' => $this->faker->randomFloat(2, 1, 5000),
            'is_active' => $this->faker->numberBetween(0, 1),
        ];
    }
}

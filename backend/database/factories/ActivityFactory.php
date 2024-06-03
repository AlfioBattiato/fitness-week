<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Activity>
 */
class ActivityFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //il fake() è un nuovo metodo laravel e sostituisce il $this->faker() che trovi su slot
            'name' => fake()->name(),
            'description' => fake()->words(rand(10,10), true),
            'activity_img' => "https://plus.unsplash.com/premium_photo-1672352100479-b09df32e7ed0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D",
           
        ];
    }
}

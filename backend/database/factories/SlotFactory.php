<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Slot>
 */
class SlotFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
        
        return [
            // Seleziona un giorno casuale dall'array
            'day' => $days[array_rand($days)],
              // Genera un'ora di inizio casuale
              'start' => $this->faker->time($format = 'H:i:s', $max = 'now'),
              // Genera un'ora di fine casuale
              'end' => $this->faker->time($format = 'H:i:s', $max = 'now'),
        ];
    }
}

<?php

namespace Database\Factories;

use App\Models\Activity;
use App\Models\Slot;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Course>
 */
class CourseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
      
            $rooms = ['Room-A', 'Room-B', 'Room-C', 'Room-D'];
            $slot_ids = Slot::all()->pluck('id')->all();
            $activities_ids = Activity::all()->pluck('id')->all();
        return [
          
            'activity_id' =>fake()->randomElement($activities_ids),
            'slot_id' => fake()->randomElement($slot_ids),
            'location' => fake()->randomElement($rooms),
             
             
        ];
        
    }
}

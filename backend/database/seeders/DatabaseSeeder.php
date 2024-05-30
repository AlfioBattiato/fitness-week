<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Course;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'admin',
            'email' => 'admin@admin.admin',
            'role' => 'admin',
        ]);
        User::factory()->create([
            'name' => 'guest',
            'email' => 'guest@guest.guest',
            'role' => 'guest',
        ]);



        $this->call([
            ActivitySeeder::class,
            SlotSeeder::class,
            CourseSeeder::class,
        ]);

        $users = User::all()->all();
        $course_ids = Course::all()->pluck('id')->all();
        $status = ['pending', 'accepted', 'rejected'];

        
        foreach ($users as $user) {
            if ($user->role==='guest') {
                foreach ($course_ids as $course_id) {
                    $user->course()->attach($course_id, ['status' => fake()-> randomElement($status)]);
                }
            } 
        }


    }
}

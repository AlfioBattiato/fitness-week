<?php

use App\Http\Controllers\api\CourseController;
use App\Http\Controllers\Auth\RegisteredUserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
Route::name('api.v1.') // prefissa il nome della rotta è come se scriviamo: ....->name('api.v1.faculties.index')
    ->prefix('v1')     // prefissa l'url è come se scriviamo: Route::get('/api/v1/faculties', [.....])...
    // il prefix /api lo da di default il fatto che queste rotte sono scritte nel file api.php
    // ->middleware(['auth:sanctum'])
    ->group(function () {
        Route::get('/courses', [CourseController::class, 'index'])->name('courses.index');
        Route::get('/courses/{id}', [CourseController::class, 'show'])->name('courses.show');
        Route::get('/users/{id}', [RegisteredUserController::class, 'show'])->name('users.show');
      
  
    });

<?php

namespace App\Http\Controllers\api;

use App\Models\Course;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCourseRequest;
use App\Http\Requests\UpdateCourseRequest;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $courses = Course::with('slot','activity')->get(); 
        return $courses;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCourseRequest $request)
    {

        $request->validate([
            'activity_id' => 'required|exists:activities,id',
            'slot_id' => 'required|exists:slots,id',
            'location' => 'required|string|max:255',
        ]);

     // Creazione di una nuova istanza di Course
        $course = new Course();
        $course->activity_id = $request->activity_id;
        $course->slot_id = $request->slot_id;
        $course->location = $request->location;

        // Salvataggio del corso nel database
        $course->save();

        // Restituzione della risposta JSON con il corso appena creato
        return response()->json($course, 201);
    
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $course = Course::with('slot', 'activity')->find($id);
        if (!$course) {
            return response(['message' => 'Not found'], 404);
        }
        // return view('faculties.show', ['faculty' => $faculty]);
        return [
            'success' => true,
            'data' => $course
        ];
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Course $course)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCourseRequest $request, Course $course)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Course $course)
    {
        //
    }
}

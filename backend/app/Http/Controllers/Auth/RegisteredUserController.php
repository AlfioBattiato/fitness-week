<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Validation\Rules;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Storage;

class RegisteredUserController extends Controller
{
    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): Response
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:'.User::class],
            'password' => ['required', 'confirmed', Rules\Password::defaults()->min(4)],
            'profile_img' => ['nullable', 'image', 'max:1024'], // size in kilobytes

        ]);

        // $file_path = $request->hasFile('profile_img')  ? $request->file('profile_img')->store('profiles', 'public') : 'profiles/Missing_photo.svg';METODO A
        // $file_path = $request['profile_img'] ? Storage::put('/profiles', $request['profile_img']) : 'profiles/Missing_photo.svg'; // usa lo storage di default METODO B

        $file_path = $request['profile_img'] ? $request->file('profile_img')->store('profiles', 'public') : 'profiles/Missing_photo.svg';


        $data = $request->all();
        $user = new User();
        $user->name = $data['name'];
        $user->email = $data['email'];
        $user->password = $data['password'];
        $user->role ='guest';
        $user->profile_img = 'storage/' . $file_path;
        $user->save();


        //*****************************************************METODO B*********************************** */
        // $user = User::create([
        //     'name' => $request->name,
        //     'email' => $request->email,
        //     'password' => Hash::make($request->string('password')),
        //     // 'role' => 'guess',        //  codice#22

        // ]);
        //************************************************************************************************* */

        event(new Registered($user));

        Auth::login($user);

        return response()->noContent();
    }


    public function show($id)
    {
        $user = User::find($id);
        if (!$user) {
            return response(['message' => 'Not found'], 404);
        }
        // return view('faculties.show', ['faculty' => $faculty]);
        return [
            'success' => true,
            'data' => $user
        ];
    }

    public function edit($id)
    {
       
    }

    public function Update($id)
    {
        $user = User::find($id);
        if (!$user) {
            return response(['message' => 'Not found'], 404);
        }
       
        return [
            'success' => true,
            'data' => $user
        ];
    }
}

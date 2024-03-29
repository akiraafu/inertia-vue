<?php

use App\Http\Controllers\Auth\LoginController;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('login',[LoginController::Class, 'create'])->name('login');

Route::middleware('auth')->group(function( ){

    Route::get('/', function(){
        return Inertia::render('Home');
    });

    Route::get('/users', function(){
        
        return Inertia::render('Users/Index',[
            'users' => User::query()
            ->when(Request::input('search'), function($query, $search){
                $query->where('name', 'like', '%'.$search.'%');
            })
            ->paginate(10)
            ->withQueryString()
            ->through(fn($user)=>[
                'id'=>$user->id,
                'name'=>$user->name
            ]),
            
            'filters'=> Request::only(['search'])
        
        ]);


    });

    Route::get('/users/create',function(){
        return Inertia::render('Users/Create');
    });

    Route::post('/users',function(){

        //validate the request
        $attributes = Request::validate([
            'name'=>'required',
            'email'=>['required','email'],
            'password'=>'required'

        ]);

        //create the user
        User::create($attributes);

        //redirect
        return redirect('/users');

    });


    Route::get('/settings', function(){
        return Inertia::render('Settings');
    });


    Route::post('/logout',function(){
        dd(request('foo'));
    });


});
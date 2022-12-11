<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use App\Models\Training;
use DB;
class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //  $users = User::All();
        
        $users = User::join('training_user', 'users.id', '=', 'training_user.user_id')
        ->join('trainings', 'trainings.id', '=', 'training_user.training_id')
        ->get()
        ->groupBy('user_id');

        $newUsers = [];

        foreach ( $users as $trainings) {
            foreach ($trainings as  $training) {
               
            }
        }
      
        return response()->json($users);

    }

    public function training_user($id)
    {
       
        $usersTraining = User_Training::where('user_id',$id)->count();
        return response()->json($usersTraining);
    }

    public function Userprice($id)
    {
        $user = User::find($id)->get();
        $trainingUser = User_Training::where('user_id',$user[0]->id)->select('training_id')->get();
       // $price = $trainingUser->price()->get();
       
       $total = 0;
        foreach($trainingUser as $training)
        {
            $price = Training::where('id',$training->training_id)->select('price')->get();
            $total = $total + $price[0]->price;
        }
       
        dd($total);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}

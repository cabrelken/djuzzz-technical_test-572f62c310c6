<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use App\Models\Training;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
         $users = User::All();
        // withcount():fonction prédefinie qui compte le nombre de ligne de la table associative
      
        // $users = User::join('training_user', 'users.id', '=', 'training_user.user_id')
        // ->join('trainings', 'trainings.id', '=', 'training_user.training_id')
        // // ->orderByRaw('SUM(price)')
        // // ->groupBy('training_user.user_id')
        // ->get();

        //$users = User::select('users.*','training_user.*', 'trainings.*', 'users.id As idUser', 'trainings.price As prices', Training::raw('SUM(trainings.price) as TotalDeposits'))
         //->leftJoin('training_user', 'training_user.user_id', '=', 'users.id')
        // ->leftJoin('trainings', 'training_user.training_id', '=', 'trainings.id')
         //->groupby('training_user.user_id')
         //->get();

        return response()->json($users);

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

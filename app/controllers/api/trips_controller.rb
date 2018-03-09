class Api::TripsController < ApplicationController
  before_action :set_trip, only: [:show, :update, :destroy]
  
  #GET
  def index
    render json: Trip.all
  end
  #GET
  def show
    render json: @trip
  end
  #POST
  def create
    @trip = Trip.new(trip_params)
    if @trip.save
      render json: @trip, status: :created
    else
      render json: @trip.errors, status: :unprocessable_entity
    end
  end
  #PATCH
  def update
    if @trip.update(trip_params)
      render json: @trip
    else
      render json: @trip.errors, status: :unprocessable_entity
    end
  end
  #DELETE 
  def destroy
    @trip.destroy
    render json: { message: 'Trip has been deleted' }
  end

  private
  def set_trip
    @trip = Trip.find(params[:id])
  end

  def trip_params
    params.require(:trip).permit(:name, :complete)
  end
end



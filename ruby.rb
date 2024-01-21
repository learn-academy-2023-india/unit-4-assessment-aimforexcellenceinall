# UNIT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# Create the code that makes all Bike specs pass.
# Run the file with the following command: $ rspec ruby_spec.rb

# Add comments to your code explaining your approach

class Bike  
    # attr_accessor allows me to create a getter and setter method for model, wheels, and current speed
    attr_accessor :model, :wheels, :current_speed
    # initializing the Bike object with the model name, number of wheels, and current speed
    def initialize(model)
        @model = model
        @wheels = 2
        @current_speed = 0
    end
    # pedal_faster method increases the current speed by a given integer (amount)
    def pedal_faster(speed)
        @current_speed += speed
    end
    # brake method decreases the current speed by a given amount while preventing negative speeds 
    def brake(speed)
        @current_speed -= speed 
        @current_speed = 0 if @current_speed < 0
        @current_speed
    end
    # bike_info method returns a string with the model name, number of wheels, and current speed
    def bike_info
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end
end

# Finished in 0.00296 seconds (files took 0.04116 seconds to load)
# 9 examples, 0 failures
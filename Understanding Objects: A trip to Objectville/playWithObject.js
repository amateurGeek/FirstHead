var fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000,
    fuel: 0,
    started: false,

    start: function() {
      if (this.fuel == 0) {
        alert("The car is on empty, fill up before starting")
      } else
        this.started = true;
    },

    stop: function() {
      this.started = false;
    },

    drive: function() {
      if (this.started) {
        if (this.fuel > 0) {
          alert(this.make + " " + this.model + " goes ZOOM ZOOM");
          this.fuel = this.fuel - 1;
        } else {
          alert("Uh Oh! Out of fuel");
          this.stop();
        }
      } else {
        alert("Start the engine buddy");
      }
    },
    addFuel: function(amount) {
      this.fuel = this.fuel + amount;
    }
};


fiat.start();
fiat.drive();
fiat.stop();
fiat.drive();

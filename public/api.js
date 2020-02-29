const API = {
  async getLastWorkout() {
    console.log('pub api getLastWorkout')
    const res = await fetch("/api/workouts");
    const json = await res.json();

    return json[json.length - 1];
  },
  async addExercise(data) {
    console.log('pub api addExercise data');
    console.log(data);
    const id = location.search.split("=")[1];
    console.log('pub api addExercise location.search id');
    console.log(id);
    const res = await fetch("/api/workouts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const json = await res.json();
    console.log('pub api addExercise res');
    console.log(json);
    return json;
  },
  async createWorkout() {
    console.log('pub api createWorkout');
    const res = await fetch("/api/workouts", {
      method: "POST",
      headers: { "Content-Type": "application/json" }
    });

    const json = await res.json();

    return json;
  },

  async getWorkoutsInRange() {
    console.log('pub api getWorkoutsInRange');
    const res = await fetch(`/api/workouts/range`);
    const json = await res.json();
    
    return json;
  },
};

const getGoals = (req,res) => {
    res.status(200).json({
        message: "Get goals",
        goals: []
    })
};

const setGoal = (req,res) => {
    console.log(req.body)

    res.status(200).json({
        message: "Set Goal",
        goals: []
    })
}

const updateGoal = (req,res) => {
    res.status(200).json({
        message: "Update Goal: " + req.params.id,
        goals: []
    })
}

const deleteGoal = (req,res) => {
    res.status(200).json({
        message: "Delete Goal:"  + req.params.id,
        goals: []
    })
}

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}

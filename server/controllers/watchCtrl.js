let cartedWatches = []

module.exports = {
    getCartedWatches: (req, res) => {
        res.status(200).send(cartedWatches)
    },
    cartedWatch: (req, res) => {
        const {watch} = req.body

        cartedWatches.push(watch)
        res.status(200).send(cartedWatches)

    },
    editModel: (req, res) => {
        const { id } = req.params
        const { model } = req.body

        const watch = cartedWatches.find(e => e.id === +id)
        watch.model = model

        res.status(200).send(cartedWatches)
    },
    deleteWatch: (req, res) => {
        const { id } = req.params
        
        const index = cartedWatches.findIndex(e => e.id === id)
        cartedWatches.splice(index, 1)
        res.status(200).send(cartedWatches)

    }
}
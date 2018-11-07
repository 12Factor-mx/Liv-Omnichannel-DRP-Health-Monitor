



function apiPut() {

}

function callApi()
{

   await  axios.put('http://localhost:9001/rootmondrp')
        .then(function (response) {
            this.loading = false;
            this.rootmondrp = response.data;
        }.bind(this))
        .catch(e => {
            this.loading = false;
        })

}


module.exports = apiPut
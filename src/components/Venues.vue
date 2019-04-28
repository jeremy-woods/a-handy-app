<template>
    <div id="venues">
        <h1>Venues</h1>
        <div v-for="venue in venues" v-bind:key="venue.id" class="item">
            <h2> {{ venue.name }} </h2>
            <p>Address: {{ venue.streetaddress }}<br />
            {{ venue.city }}, {{ venue.state }} &nbsp; {{ venue.zip }}</p>
        </div>
    </div>
</template>
<style>
.item
{
    background: wheat;
    border: 3px solid lightgoldenrodyellow;
    max-width: 400px;
    margin: 30px auto;
    padding: 0px 20px;
}
</style>
<script>
import db from './firebaseInit'
export default {
    name: 'venues',
    data () {
        return {
            venues: []
        }
    },
    created () {
        db.collection('venues').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                const data = {
                    'id': doc.id,
                    'name': doc.data().name,
                    'streetaddress': doc.data().address.streetaddress,
                    'city': doc.data().address.city,
                    'state': doc.data().address.state,
                    'zip': doc.data().address.zip
                }
                this.venues.push(data)
            })
        })
    }
}
</script>
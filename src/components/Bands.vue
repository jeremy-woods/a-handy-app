<template>
    <div id="bands">
        <h1>Bands</h1>
        <div v-for="band in bands" v-bind:key="band.id" class="item">
            <h2> {{ band.name }} </h2>
            <ul><h4 v-if="band.relatedbands">Related Bands:</h4>
                <li v-for="(relatedband, index) of band.relatedbands" :key="index">
                   {{ relatedband }}    
               </li>
            </ul>
         
        </div>

    </div>
</template>

<script>
import db from './firebaseInit'
export default {
    name: 'bands',
    data () {
        return {
            bands: []
        }
    },
    created () {
        db.collection('bands').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                const data = {
                    'id': doc.id,
                    'name': doc.data().name,
                    'relatedacts': doc.data().relatedacts,
                    'relatedbands': doc.data().relatedbands
                }
                this.bands.push(data)
            })
        })
    }
}
</script>
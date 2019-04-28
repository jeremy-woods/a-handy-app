<template>
    <div id="events">
        <h1>Events</h1>
        <div v-for="event in events" v-bind:key="event.id" class="item">
            <h2>{{ event.bandname }} at {{ event.venuename }}</h2>
            <h4> {{ moment(event.starttime).format('MMMM Do YYYY') }} </h4>
            <p>From: {{ moment(event.starttime).format('h:mm a') }} until {{event.stoptime}}</p>
            <div class="category">
                <ul v-if="event.categorys">
                    <li v-for="(category, index) in event.categorys" v-bind:key="index">
                        {{ category }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import db from './firebaseInit'
export default {
    name: 'events',
    data () {
        return {
            events: []
        }
    },
    created () {
        db.collection('events').orderBy("starttime").get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                console.log(doc.data());
                const data = {
                    'id': doc.id,
                    
                    'bandname': doc.data().bandname,
                    'venuename': doc.data().venuename,
                    'starttime': doc.data().starttime.seconds*1000,
                    'stoptime': doc.data().stoptime,
                    'categorys': doc.data().category
                }
                this.events.push(data)
            })
        })
    }
}
</script>
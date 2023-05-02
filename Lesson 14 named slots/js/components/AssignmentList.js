import Assignment from "./Assignment.js"
import AssignmentTags from "./AssignmentTags.js"
import Panel from "./Panel.js";

export default{
    components:{Assignment,AssignmentTags,Panel},
    template:
    `
    <Panel v-show="filteredAssignments.length" class="w-70">
<div class="flex justify-between">
<h2 class="font-bold mb-2">
{{title}}
<span>({{filteredAssignments.length}})</span>
</h2>

<button v-show="canToggle" @click="$emit('toggle')">&times</button>

</div>
<assignment-tags
v-model:currentTag="currentTag"
:initialTags="assignments.map(a => a.tag)"
/>

<ul class="border border-gray-600 divide-y divide-gray-600">
<Assignment
v-for="assignment in filteredAssignments"
:key="assignment.id"
:assignment="assignment">
</Assignment>
</ul>
<slot></slot>
<template #footer>
this is the footer
</template>
</Panel>
    `,data() {
        return {
            currentTag: 'all'
        }
    },
    props:{
        assignments:Array,
        title:String,
        canToggle: {
            type: Boolean,
            default: false
        }
    },
    computed:{
        filteredAssignments(){
            if(this.currentTag == 'all'){
                return this.assignments;
            }
            return this.assignments.filter(a => a.tag === this.currentTag);
        },
    }
}

// Note
// $event is the parameter sent from child via emit.
// v-slot:footer == #footer
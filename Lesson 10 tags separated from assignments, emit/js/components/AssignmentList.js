import Assignment from "./Assignment.js"
import AssignmentTags from "./AssignmentTags.js"
export default{
    components:{Assignment,AssignmentTags},
    template:
    `
    <section v-show="filteredAssignments.length">
<h2 class="font-bold mb-2">
{{title}}
<span>({{filteredAssignments.length}})</span>
</h2>

<assignment-tags
@change="currentTag = $event"
:initialTags="assignments.map(a => a.tag)"
:currentTag="currentTag"/>

<ul class="border border-gray-600 divide-y divide-gray-600">
<Assignment
v-for="assignment in filteredAssignments"
:key="assignment.id"
:assignment="assignment">
</Assignment>
</ul>
</section>
    `,data() {
        return {
            currentTag: 'all'
        }
    },
    props:{
        assignments:Array,
        title:String
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

//$event is the parameter sent from child via emit.
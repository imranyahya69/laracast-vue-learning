import Assignment from "./Assignment.js"
export default{
    components:{Assignment},
    template:
    `
    <section v-show="filteredAssignments.length">
<h2 class="font-bold mb-2">
{{title}}
<span>({{filteredAssignments.length}})</span>
</h2>
<div class="flex gap-3">
<button
@click="currentTag=tag"
v-for="tag in tags"
class="border rounded px-1 py-px text-xs mb-3"
:class="{
    'border-blue-500 text-blue-500':currentTag==tag
}">{{tag}}</button>
</div>
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
        tags(){
            return ['all',...new Set (this.assignments.map(a => a.tag))];
        }
    }
}
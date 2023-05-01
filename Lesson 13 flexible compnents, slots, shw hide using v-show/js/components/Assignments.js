import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";
export default {
    components: {
        AssignmentList,AssignmentCreate
    },
    template:
        `
        <section class="flex gap-8">
        <AssignmentList :assignments="filters.inProgress" title="In progress assignments">
        <A  ssignmentCreate @add="add"></AssignmentCreate>
        </AssignmentList>

        <div v-show="showCompleted">
        <AssignmentList
        @toggle="showCompleted = !showCompleted"
        :assignments="filters.completed"
        title="Completed assignments"
        can-toggle>
        </AssignmentList>


        </div>
        </section>
        `,
    data() {
        return {
            assignments: [],
            showCompleted: true
        };
    },
    created() {
        fetch('http://localhost:3001/assignments')
        .then(response => response.json())
        .then(assignments => this.assignments = assignments)
    },
    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(assignment => !assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete)
            }
        }
    },
    methods: {
        add(name) {
            this.assignments.push({
                name: name,
                complete: false,
                tag: 'science',
                id: this.assignments.length + 1
            })
        }
    },
}
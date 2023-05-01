import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";
export default {
    components: {
        AssignmentList,AssignmentCreate
    },
    template:
        `
        <section class="space-y-6">
        <AssignmentList :assignments="filters.inProgress" title="In progress assignments"></AssignmentList>
        <AssignmentList :assignments="filters.completed" title="Completed assignments"></AssignmentList>
        <AssignmentCreate @add="add"></AssignmentCreate>        
        </section>
`,

    data() {
        return {
            assignments: [],
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
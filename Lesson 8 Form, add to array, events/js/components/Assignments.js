import AssignmentList from "./AssignmentList.js";
export default {
    components: {
        AssignmentList
    },
    template:
        `
        <section class="space-y-6">
        <AssignmentList :assignments="filters.inProgress" title="In progress assignments"></AssignmentList>
        <AssignmentList :assignments="filters.completed" title="Completed assignments"></AssignmentList>
        <form @submit.prevent="add" class="text-black">
            <input v-model="newAssignment" placeholder="Enter Assignment" class="p-2"/>
            <button type="submit" class="bg-white p-2 border-l">Add</button>
        </form>
        </section>
`,

    data() {
        return {
            assignments: [
                { name: 'Finish project', complete: false, id: 1 },
                { name: 'Read chapter 4', complete: false, id: 2 },
                { name: 'Turn in homework', complete: false, id: 3 },
            ],
            newAssignment: ''
        };
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
        add(e) {
            this.assignments.push({
                name: this.newAssignment,
                complete: false,
                id: this.assignments.length + 1
            })
            this.newAssignment = '';
        }
    },
}
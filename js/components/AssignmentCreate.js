export default {
    template:
        `
    <form @submit.prevent="add" class="text-black">
    <input v-model="newAssignment" placeholder="Enter Assignment" class="p-2"/>
    <button type="submit" class="bg-white p-2 border-l">Add</button>
    </form>
    
    `,
    // <pre>{{assignments}}</pre>
    data() {
        return {
            newAssignment: ''
        }
    },
    methods: {
        add() {
            this.$emit('add',this.newAssignment);
            this.newAssignment = '';

        }
    },
}
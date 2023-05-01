import Assignments from "./Assignments.js";
import Panel from "./Panel.js";
export default {
        components:{
            Assignments,Panel
        },
    template:
        `
        <div class="grid gap-6 mt-5">
            <Assignments></Assignments>
            <Panel theme="dark">
                <template v-slot:heading>
                    Hi there!!!
                </template>

                <template v-slot:default>
                    This is paragraph
                </template>

                <template v-slot:footer>
                    Learning Vue js
                </template>
            </Panel>

            <Panel theme="light">
            <template v-slot:heading>
                Hi there!!!
            </template>

            <template v-slot:default>
                This is paragraph
            </template>

            <template v-slot:footer>
                Learning Vue js
            </template>
        </Panel>

        </div>
`,

};
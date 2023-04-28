export default {
    template:
        `
        <button 
            :class="{
                'border rounded px-5 py-2 disabled:cursor-not-allowed':true,
                'bg-blue-600 hover:bg-gray-700  ': type === 'primary',
                'bg-purple-200 hover:bg-gray-400': type === 'secondary',
                'is-loading':processing
            }"
            :disabled="processing">
        <slot/>
        </button>
        `,
    props: {
        type: {
            type:String,
            default:"primary"
        },
        processing:{
            type:Boolean,
            default: false
        }
    },
}
//slot is used above to enable dynamic button text in the blade or html

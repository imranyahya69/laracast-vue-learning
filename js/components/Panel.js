export default{
    template:
    `
    <div
    :class="{
        'p-4 border rounded-lg':true,
        'bg-white border border-gray-300 text-black':theme === 'light',
        'bg-gray-700  border border-gray-600 text-white':theme === 'dark',
    }">
        <h2 v-if="$slots.heading" class="font-bold mb-2">
            <slot name="heading"/>
        </h2>
        <slot name="default"/>
        <footer v-if="$slots.footer" class="border-t border-gray-600 mt-4 pt-4 text-sm">
            <slot name="footer"/>
        </footer>
    </div>

    `,props:{
        heading:String,
        theme:{
            type: String,
            default: 'dark'
        }
    }
}
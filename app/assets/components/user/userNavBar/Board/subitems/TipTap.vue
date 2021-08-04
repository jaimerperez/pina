<template>
  <div>
    <div class="border-2 border-black rounded my-2" v-if="editor">
      <div class="border-b-2 border-black">
        <button  class="  rounded m-2 p-2" @click="editor.chain().focus().toggleBold().run()" :class="{ 'is-active border border-black text-white': editor.isActive('bold') }">
          <img class="w-5 h-5" src="/assets/images/icons/Bold03.svg" alt="">
        </button>
        <button class=" rounded m-2 p-2" @click="editor.chain().focus().toggleUnderline().run()" :class="{ 'is-active border border-black': editor.isActive('underline') }">
          <img class="w-5 h-5" src="/assets/images/icons/Underline05.svg" alt="">
        </button>
        <button class=" rounded m-2 p-2" @click="editor.chain().focus().toggleItalic().run()" :class="{ 'is-active border border-black text-white': editor.isActive('italic') }">
          <img class="w-5 h-5" src="/assets/images/icons/Italic04.svg" alt="">
        </button>
        <button class="rounded m-2 p-2" @click="editor.chain().focus().toggleStrike().run()" :class="{ 'is-active border border-black text-white': editor.isActive('strike') }">
          <img class="w-5 h-5" src="/assets/images/icons/Strike06.svg" alt="">
        </button>
        <button class=" rounded m-2 p-2" @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'is-active bg-black text-white': editor.isActive('heading', { level: 1 }) }">
          H1
        </button>
        <button class="  rounded m-2 p-2" @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'is-active bg-black text-white': editor.isActive('heading', { level: 2 }) }">
          H2
        </button>
        <button class=" rounded m-2 p-2" @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" :class="{ 'is-active bg-black text-white': editor.isActive('heading', { level: 3 }) }">
          H3
        </button>
        <button class=" rounded m-2 p-2" @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'is-active border border-black text-white': editor.isActive('bulletList') }">
          <img class="w-5 h-5" src="/assets/images/icons/Bullet10.svg" alt="">
        </button>
        <button class=" rounded m-2 p-2" @click="editor.chain().focus().toggleOrderedList().run()" :class="{ 'is-active border border-black text-white': editor.isActive('orderedList') }">
          <img class="w-5 h-5" src="/assets/images/icons/orderedList.svg" alt="">
        </button>
        <button class=" rounded m-2 p-2" @click="setLink" :class="{ 'is-active border border-black text-white': editor.isActive('link') }">
          <img class="w-5 h-5" src="/assets/images/icons/Files12.svg" alt="">
        </button>
        <button class=" rounded m-2 p-2" @click="tableactive = !tableactive">
            <img class="w-5 h-5" src="/assets/images/icons/table.svg" alt="">
        </button>
        <button class=" rounded m-2 p-2" @click="textalignactive = !textalignactive">
            <img class="w-5 h-5" src="/assets/images/icons/aligntext.svg" alt="">
        </button>
        <div v-if="textalignactive">
          <button @click="editor.chain().focus().setTextAlign('left').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }">
      left
    </button>
    <button @click="editor.chain().focus().setTextAlign('center').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }">
      center
    </button>
    <button @click="editor.chain().focus().setTextAlign('right').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }">
      right
    </button>
    <button @click="editor.chain().focus().setTextAlign('justify').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'justify' }) }">
      justify
    </button>
    <button @click="editor.chain().focus().unsetTextAlign().run()">
      set default
    </button>
        </div>
        <div v-if="tableactive">
          <button class=" rounded m-2 p-2 border border-black"  @click="editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()">
              Insertar tabla 
          </button>
          <button class=" rounded m-2 p-2 border border-black" @click="editor.chain().focus().addColumnBefore().run()">
            Añadir columna antes
          </button>
          <button class=" rounded m-2 p-2 border border-black" @click="editor.chain().focus().addColumnAfter().run()">
            Añadir columna despues
          </button>
          <button class=" rounded m-2 p-2 border border-black" @click="editor.chain().focus().deleteColumn().run()">
            Eliminar columna
          </button>
          <button class=" rounded m-2 p-2 border border-black" @click="editor.chain().focus().addRowBefore().run()">
            Añadir fila antes
          </button>
          <button class=" rounded m-2 p-2 border border-black" @click="editor.chain().focus().addRowAfter().run()">
            Añadir fila despues 
          </button>
          <button class=" rounded m-2 p-2 border border-black" @click="editor.chain().focus().deleteRow().run()">
            Eliminar fila
          </button>
          <button class=" rounded m-2 p-2 border border-black" @click="editor.chain().focus().deleteTable().run()">
           Eliminar tabla 
          </button>
          <button class=" rounded m-2 p-2 border border-black" @click="editor.chain().focus().mergeCells().run()">
            Unir celdas
          </button>
          <button class=" rounded m-2 p-2 border border-black" @click="editor.chain().focus().splitCell().run()">
           Separar celdas
          </button>
          <button class=" rounded m-2 p-2 border border-black" @click="editor.chain().focus().toggleHeaderColumn().run()">
            Añadir cabecera en la columna
          </button>
          <button class=" rounded m-2 p-2 border border-black" @click="editor.chain().focus().toggleHeaderRow().run()">
            Añadir cabecera en la fila
          </button>
          <button class=" rounded m-2 p-2 border border-black" @click="editor.chain().focus().toggleHeaderCell().run()">
            Añadir cabecera en la celda
          </button>
          <button class=" rounded m-2 p-2 border border-black" @click="editor.chain().focus().goToNextCell().run()">
            Ir a la celda siguiente
          </button>
          <button class=" rounded m-2 p-2 border border-black" @click="editor.chain().focus().goToPreviousCell().run()">
            Ir a la celda previa
          </button>
        </div>
        <button class=" rounded m-2 p-2 " @click="editor.chain().focus().toggleTaskList().run()" :class="{ 'is-active border border-black': editor.isActive('taskList') }">
          <img class="w-5 h-5" src="/assets/images/icons/taskList.svg" alt="">
        </button>
        <button class=" rounded m-2 p-2" @click="editor.chain().focus().toggleHighlight().run(), coloractive= !coloractive" :class="{ 'is-active border border-black text-white': editor.isActive('highlight') }">
            <img class="w-5 h-5" src="/assets/images/icons/color.svg" alt="">
        </button>
        <div v-if="coloractive">
          <button @click="editor.chain().focus().toggleHighlight({ color: '#ffa8a8' }).run()" :class="{ 'is-active': editor.isActive('highlight', { color: '#ffa8a8' }) }">
          <div class="bg-[#ffa8a8] w-8 h-8 border "></div>
        </button>
        <button @click="editor.chain().focus().toggleHighlight({ color: '#ffc078' }).run()" :class="{ 'is-active': editor.isActive('highlight', { color: '#ffc078' }) }">
          <div class="bg-[#ffc078] w-8 h-8 border "></div>
        </button>
        <button @click="editor.chain().focus().toggleHighlight({ color: '#8ce99a' }).run()" :class="{ 'is-active': editor.isActive('highlight', { color: '#8ce99a' }) }">
          <div class="bg-[#8ce99a] w-8 h-8 border "></div>
        </button>
        <button @click="editor.chain().focus().toggleHighlight({ color: '#74c0fc' }).run()" :class="{ 'is-active': editor.isActive('highlight', { color: '#74c0fc' }) }">
          <div class="bg-[#74c0fc] w-8 h-8 border "></div>
        </button>
        <button @click="editor.chain().focus().toggleHighlight({ color: '#b197fc' }).run()" :class="{ 'is-active': editor.isActive('highlight', { color: '#b197fc' }) }">
          <div class="bg-[#b197fc] w-8 h-8 border "></div>
        </button>
        </div>
      </div>
      <editor-content class="p-5 flex-auto overflow-y-auto overflow-x-hidden cursor-text" :editor="editor" />
      <div class="bottom-buttons flex flex-row">
        <button class="flex flex-row rounded m-2 p-2" @click="browse">
         <img class="w-5 h-5" src="/assets/images/icons/Files17.svg" alt=""> 
         <div>
           Agregar archivos
         </div>
          <input type="file" class="hidden" ref="file" @change="addImage">
      </button>
      <button class="flex flex-row rounded m-2 p-2" @click="active=!active">
         <img class="w-5 h-5" src="/assets/images/icons/Emoji.svg" alt=""> 
         <div >
           Emoji
         </div>
      </button>
      </div>
      
      <div v-if="active">
          <button @click="editor.chain().focus().insertContent('✨').run()">
          ✨
          </button>
          <button @click="editor.chain().focus().insertContent('😅').run()">
            😅
          </button>
          <button @click="editor.chain().focus().insertContent('🎉').run()">
            🎉
          </button>
          <button @click="editor.chain().focus().insertContent('💖').run()">
            💖
          </button>
          <button @click="editor.chain().focus().insertContent('👀').run()">
            👀
          </button>
          <button @click="editor.chain().focus().insertContent('👍️').run()">
            👍️
          </button>
      </div>
      
    </div>
  </div>
</template>

<script>
import tippy from 'tippy.js'
import {getAllUsers, postFilesUpload} from '../../../../../servicies/userServicies'
import { Editor, EditorContent, VueRenderer } from '@tiptap/vue-2'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Mention from '@tiptap/extension-mention'
import MentionList from './MentionList'
import StarterKit from '@tiptap/starter-kit'
import Heading from '@tiptap/extension-heading'
import BulletList from '@tiptap/extension-bullet-list'
import OrderedList from '@tiptap/extension-ordered-list'
import ListItem from '@tiptap/extension-list-item'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import Underline from '@tiptap/extension-underline'
import Highlight from '@tiptap/extension-highlight'
import Table from '@tiptap/extension-table'
import TableRow from '@tiptap/extension-table-row'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'
import TextAlign from '@tiptap/extension-text-align'
export default {
  components: {
    EditorContent,
  },
props:{
  mentionList: Array,
  value: {
      type: String,
      default: '',
    },
},
  data() {
    return {
      editor: null,
      active: false,
      coloractive: false,
      tableactive: false,
      textalignactive: false,
    }
  },
  methods: {
    browse(){
            this.$refs.file.click();
        },
    addImage(e) {
      this.file = e.target.files[0]
      const token = localStorage.getItem('validation_token');
      
      const formData = new FormData()
            formData.append('image', this.file);
            formData.append('token', token);
      let promise = new Promise((resolve, reject) => {
                resolve(postFilesUpload(formData));
                
              });
              promise.then((response) => {
                console.log(response)
                const name = response
                const url = '/assets/files/' + name
              if(url)
                this.editor.chain().focus().setImage({ src: url }).run()
              });
    },
    setLink() {
      const url = window.prompt('URL')

      this.editor
        .chain()
        .focus()
        .extendMarkRange('link')
        .setLink({ href: url })
        .run()
    },
  },
watch: {
    value(value) {
      // HTML
      const isSame = this.editor.getHTML() === value

      // JSON
      // const isSame = this.editor.getJSON().toString() === value.toString()

      if (isSame) {
        return
      }

      this.editor.commands.setContent(this.value, false)
    },
  },
  mounted() {
   
    this.editor = new Editor({
      extensions: [
        StarterKit,
        BulletList,
        ListItem,
        Document,
        Paragraph,
        Text,
        OrderedList,
        Image,
        Link,
        TaskList,
        TaskItem,
        Underline,
        TextAlign.configure({
          types: ['heading', 'paragraph'],
        }),
        Table.configure({
          resizable: true,
        }),
        TableRow,
        TableHeader,
        TableCell,
        Highlight.configure({ multicolor: true }),
        Mention.configure({
          HTMLAttributes: {
            class: 'mention m-auto text-blue-700 bg-blue-700 bg-opacity-25 rounded-t',
          },
          suggestion: {
            decorationTag: 'h1',
            items: query => {
              return this.mentionList.filter(item => item.email.toLowerCase().startsWith(query.toLowerCase())).slice(0, 5)
            },
            render: () => {
              let component
              let popup

              return {
                onStart: props => {
                  component = new VueRenderer(MentionList, {
                    parent: this,
                    propsData: props,
                  })

                  popup = tippy('body', {
                    getReferenceClientRect: props.clientRect,
                    appendTo: () => document.body,
                    content: component.element,
                    showOnCreate: true,
                    interactive: true,
                    trigger: 'manual',
                    placement: 'bottom-start',
                  })
                },
                onUpdate(props) {
                  component.updateProps(props)

                  popup[0].setProps({
                    getReferenceClientRect: props.clientRect,
                  })
                },
                onKeyDown(props) {
                  return component.ref?.onKeyDown(props)
                },
                onExit() {
                  popup[0].destroy()
                  component.destroy()
                },
              }
            },
            
          },
        }),
      ],
      content: this.value,
      onUpdate: () => {
        this.$emit('input', this.editor.getHTML())
      },
    })
  },
  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>

<style lang="scss">
/* Basic editor styles */
.ProseMirror {
  > * + * {
    margin-top: 0.75em;
  }

  ul,
  ol {
    padding: 0 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
  }

  code {
    background-color: rgba(#616161, 0.1);
    color: #616161;
  }

  pre {
    background: #0D0D0D;
    color: #FFF;
    font-family: 'JetBrainsMono', monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;

    code {
      color: inherit;
      padding: 0;
      background: none;
      font-size: 0.8rem;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  blockquote {
    padding-left: 1rem;
    border-left: 2px solid rgba(#0D0D0D, 0.1);
  }

  hr {
    border: none;
    border-top: 2px solid rgba(#0D0D0D, 0.1);
    margin: 2rem 0;
  }
}
</style>
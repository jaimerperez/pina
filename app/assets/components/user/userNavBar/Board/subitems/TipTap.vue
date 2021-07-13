<template>
  <div>
    <div class="border-2 border-black rounded my-2" v-if="editor">
      <div>
        <button  class="border-2 border-black  rounded m-2 p-2" @click="editor.chain().focus().toggleBold().run()" :class="{ 'is-active bg-black text-white': editor.isActive('bold') }">
          bold
        </button>
        <button class="border-2 border-black  rounded m-2 p-2" @click="editor.chain().focus().toggleItalic().run()" :class="{ 'is-active bg-black text-white': editor.isActive('italic') }">
          italic
        </button>
        <button class="border-2 border-black  rounded m-2 p-2" @click="editor.chain().focus().toggleStrike().run()" :class="{ 'is-active bg-black text-white': editor.isActive('strike') }">
          strike
        </button>
        <button class="border-2 border-black  rounded m-2 p-2" @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'is-active bg-black text-white': editor.isActive('heading', { level: 1 }) }">
          h1
        </button>
        <button class="border-2 border-black  rounded m-2 p-2" @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'is-active bg-black text-white': editor.isActive('heading', { level: 2 }) }">
          h2
        </button>
        <button class="border-2 border-black  rounded m-2 p-2" @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" :class="{ 'is-active bg-black text-white': editor.isActive('heading', { level: 3 }) }">
          h3
        </button>
        <button class="border-2 border-black  rounded m-2 p-2" @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'is-active bg-black text-white': editor.isActive('bulletList') }">
          bullet list
        </button>
        <button class="border-2 border-black  rounded m-2 p-2" @click="editor.chain().focus().toggleCodeBlock().run()" :class="{ 'is-active bg-black text-white': editor.isActive('codeBlock') }">
          code block
        </button>
        <button class="border-2 border-black  rounded m-2 p-2" @click="editor.chain().focus().redo().run()">
          redo
        </button>
        <button class="border-2 border-black  rounded m-2 p-2" @click="browse">
          image
          <input type="file" class="hidden" ref="file" @change="addImage">
        </button>
        <button class="border-2 border-black  rounded m-2 p-2" @click="setLink" :class="{ 'is-active bg-black text-white': editor.isActive('link') }">
          link
        </button>
      </div>
      <editor-content class="p-5 flex-auto overflow-y-auto overflow-x-hidden cursor-text" :editor="editor" />
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
        Mention.configure({
          HTMLAttributes: {
            class: 'mention text-blue-700 bg-blue-700 bg-opacity-25 rounded-t',
          },
          suggestion: {
            decorationTag: 'h1',
            items: query => {
              return this.mentionList.filter(item => item.toLowerCase().startsWith(query.toLowerCase())).slice(0, 5)
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
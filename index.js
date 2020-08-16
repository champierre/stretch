class Stretch {
  constructor() {}

  getInfo() {
    return {
      id: 'stretch',
      name: 'Stretch',
      blocks: [
        {
          opcode: 'power',
          blockType: Scratch.BlockType.REPORTER,
          text: '[X]の[N]乗',
          arguments: {
            X: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '2'
            },
            N: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '3'
            }
          }
        },
        {
          opcode: 'toLowerCase',
          blockType: Scratch.BlockType.REPORTER,
          text: '[TEXT]を小文字に変換する',
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'ABC'
            }
          }
        },
        {
          opcode: 'replace',
          blockType: Scratch.BlockType.REPORTER,
          text: '[TEXT]の[STR]を[NEWSTR]に置き換える',
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'こんにちは'
            },
            STR: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'にち'
            },
            NEWSTR: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'ばん'
            }
          }
        }
      ]
    }
  }

  power(args) {
    return Math.pow(args.X, args.N)
  }

  toLowerCase(args) {
    return args.TEXT.toLowerCase()
  }

  replace(args) {
    return args.TEXT.replace(RegExp(args.STR, 'gi'), args.NEWSTR)    
  }
}

Scratch.extensions.register(new Stretch())

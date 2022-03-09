/*
▓█████▄  ▒█████   ███▄    █ ▄▄▄█████▓    ▄████▄   ██░ ██  ▄▄▄       ███▄    █   ▄████ ▓█████    ▄▄▄█████▓ ██░ ██  ██▓  ██████      █████▒██▓ ██▓    ▓█████
▒██▀ ██▌▒██▒  ██▒ ██ ▀█   █ ▓  ██▒ ▓▒   ▒██▀ ▀█  ▓██░ ██▒▒████▄     ██ ▀█   █  ██▒ ▀█▒▓█   ▀    ▓  ██▒ ▓▒▓██░ ██▒▓██▒▒██    ▒    ▓██   ▒▓██▒▓██▒    ▓█   ▀
░██   █▌▒██░  ██▒▓██  ▀█ ██▒▒ ▓██░ ▒░   ▒▓█    ▄ ▒██▀▀██░▒██  ▀█▄  ▓██  ▀█ ██▒▒██░▄▄▄░▒███      ▒ ▓██░ ▒░▒██▀▀██░▒██▒░ ▓██▄      ▒████ ░▒██▒▒██░    ▒███
░▓█▄   ▌▒██   ██░▓██▒  ▐▌██▒░ ▓██▓ ░    ▒▓▓▄ ▄██▒░▓█ ░██ ░██▄▄▄▄██ ▓██▒  ▐▌██▒░▓█  ██▓▒▓█  ▄    ░ ▓██▓ ░ ░▓█ ░██ ░██░  ▒   ██▒   ░▓█▒  ░░██░▒██░    ▒▓█  ▄
░▒████▓ ░ ████▓▒░▒██░   ▓██░  ▒██▒ ░    ▒ ▓███▀ ░░▓█▒░██▓ ▓█   ▓██▒▒██░   ▓██░░▒▓███▀▒░▒████▒     ▒██▒ ░ ░▓█▒░██▓░██░▒██████▒▒   ░▒█░   ░██░░██████▒░▒████▒
 ▒▒▓  ▒ ░ ▒░▒░▒░ ░ ▒░   ▒ ▒   ▒ ░░      ░ ░▒ ▒  ░ ▒ ░░▒░▒ ▒▒   ▓▒█░░ ▒░   ▒ ▒  ░▒   ▒ ░░ ▒░ ░     ▒ ░░    ▒ ░░▒░▒░▓  ▒ ▒▓▒ ▒ ░    ▒ ░   ░▓  ░ ▒░▓  ░░░ ▒░ ░
 ░ ▒  ▒   ░ ▒ ▒░ ░ ░░   ░ ▒░    ░         ░  ▒    ▒ ░▒░ ░  ▒   ▒▒ ░░ ░░   ░ ▒░  ░   ░  ░ ░  ░       ░     ▒ ░▒░ ░ ▒ ░░ ░▒  ░ ░    ░      ▒ ░░ ░ ▒  ░ ░ ░  ░
 ░ ░  ░ ░ ░ ░ ▒     ░   ░ ░   ░         ░         ░  ░░ ░  ░   ▒      ░   ░ ░ ░ ░   ░    ░        ░       ░  ░░ ░ ▒ ░░  ░  ░      ░ ░    ▒ ░  ░ ░      ░
   ░        ░ ░           ░             ░ ░       ░  ░  ░      ░  ░         ░       ░    ░  ░             ░  ░  ░ ░        ░             ░      ░  ░   ░  ░
 ░                                      ░
 */
import assert from 'assert/strict'

import Developer from '../lib/developer.js'
import hackathon from '../lib/hackathon.js'

const developers = [
  new Developer({
    name: 'Nicole',
    language: 'nodejs'
  }),
  new Developer({
    name: 'John',
    language: 'java'
  }),
  new Developer({
    name: 'Pete',
    language: 'python'
  })
]
describe('Hackathon', () => {
  it('should resolve with correct code for each language', async () => {
    const output = await hackathon(developers)
    assert.equal(output, [
      'console.log("Hello, Nicole!")',
      'System.out.println("Hello, John!")',
      'print("Hello, Pete!")'
    ].join('\n'))
  })

  it('should resolve with an error message for an unknown language', async () => {
    const output = await hackathon([
      ...developers,
      new Developer({
        name: 'Adam',
        language: 'abap'
      })
    ])
    assert.equal(output, [
      'console.log("Hello, Nicole!")',
      'System.out.println("Hello, John!")',
      'print("Hello, Pete!")',
      'Unsupported language: abap'
    ].join('\n'))
  })
})


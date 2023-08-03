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

import Developer from '../src/lib/developer'
import hackathon from '../src/lib/hackathon'

const developers = [
  new Developer('Nicole', 'nodejs'),
  new Developer('John', 'java'),
  new Developer('Pete', 'python')
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
      new Developer('Adam', 'abap')
    ])
    assert.equal(output, [
      'console.log("Hello, Nicole!")',
      'System.out.println("Hello, John!")',
      'print("Hello, Pete!")',
      'Unsupported language: abap'
    ].join('\n'))
  })
})


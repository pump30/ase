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

describe('Developer', () => {
  describe('constructor', () => {
    it('should create a developer', async () => {
      const developer = new Developer({
        name: 'Nicole',
        language: 'nodejs'
      })
      assert.ok(developer instanceof Developer)
    })
  })

  describe('getName', () => {
    it('should get the name', async () => {
      const developer = new Developer({
        name: 'Nicole',
        language: 'nodejs'
      })
      assert.equal(developer.getName(), 'Nicole')
    })
  })

  describe('setName', () => {
    it('should set the name', async () => {
      const developer = new Developer({
        name: 'Nicole',
        language: 'nodejs'
      })
      developer.setName('John')
      assert.equal(developer.getName(), 'John')
    })
  })

  describe('getLanguage', () => {
    it('should get the language', async () => {
      const developer = new Developer({
        name: 'Nicole',
        language: 'nodejs'
      })
      assert.equal(developer.getLanguage(), 'nodejs')
    })
  })

  describe('setLanguage', () => {
    it('should set the language', async () => {
      const developer = new Developer({
        name: 'Nicole',
        language: 'nodejs'
      })
      developer.setLanguage('java')
      assert.equal(developer.getLanguage(), 'java')
    })
  })

  describe('code', () => {
    it('should resolve with node code', async () => {
      const developer = new Developer({
        name: 'Nicole',
        language: 'nodejs'
      })
      const code = await developer.code()
      assert.equal(code, 'console.log("Hello, Nicole!")')
    })

    it('should resolve with jave code', async () => {
      const developer = new Developer({
        name: 'John',
        language: 'java'
      })
      const code = await developer.code()
      assert.equal(code, 'System.out.println("Hello, John!")')
    })

    it('should resolve with python code', async () => {
      const developer = new Developer({
        name: 'Pete',
        language: 'python'
      })
      const code = await developer.code()
      assert.equal(code, 'print("Hello, Pete!")')
    })

    it('should reject with an error for an unknown language', async () => {
      const developer = new Developer({
        name: 'Adam',
        language: 'abap'
      })
      await assert.rejects(developer.code(), new Error('Unsupported language: abap'))
    })
  })
})

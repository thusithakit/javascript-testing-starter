import { describe, expect, it } from "vitest";
import { fizzBuzz, max } from "../src/intro";

describe('max',()=>{
    it('should return the first argumnt if it is greater',()=>{
        expect(max(2,1)).toBe(2);
    })
    it('should return the second argumnt if it is greater',()=>{
        expect(max(2,4)).toBe(4);
    })
    it('should return the first argumnts are equal',()=>{
        expect(max(2,2)).toBe(2);
    })
})

describe('fizzBuzz',()=>{
    it('should return FizzBuzz if arg is divisible by 3 and 5',()=>{
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    })
    it('should return Fizz if arg is divisible only by 3',()=>{
        expect(fizzBuzz(9)).toBe('Fizz');
    })
    it('should return Buzz if arg is divisible only by 5',()=>{
        expect(fizzBuzz(10)).toBe('Buzz');
    })
    it('should return th enumber if arg is indivisible by 3 or 5',()=>{
        expect(fizzBuzz(7)).toBe('7');
    })
})
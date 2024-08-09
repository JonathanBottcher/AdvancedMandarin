let chars = require('./chars.json')

function switch_script(sentence , mode){
let special_chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzi"。？，?.!!,()（）,，';
let new_sentence = '';


    for (let i=0;i < sentence.length;i++){
        if(special_chars.includes(sentence[i]) && sentence[i]){
            new_sentence += sentence[i];

            continue
        }
        for(const [key, value] of Object.entries(chars)){
          
            
            if(sentence[i] == key && mode == 0){
                new_sentence += value;
                
                
                continue
            }
            
            else if(sentence[i] == value && mode == 1){
                new_sentence += key
                continue
            }
            else if(sentence[i] != value && sentence[i] == key && mode == 1){
                new_sentence += key
                continue
            }
            else if(sentence[i] == value && sentence[i] != key && mode == 0){
                new_sentence += value
            }
 
        }
    }
    
    
    return new_sentence;

}
//console.log(switch_script('这是什么？', 1))
export default switch_script;
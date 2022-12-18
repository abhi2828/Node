1. in this branch we learn about how to get path of the current folder using "path module", create files & 
text content in it using writeFileSync() of "fs module" dynamically in side any specific folder

2.we learn create custom path using join() of "path module" for creating files in specific path  

3.join() and parameter we pass is '__dirname' to get current folder path

4. we run our code in side for loop to create multiple file 

5.keep in mind the name of files so the our files don't override it self

6.we learn to list all create files using readdir() of "fs module" which takes two arguments
path of the folder and one function which takes 2 arguments erroe & files (its a array which have list of files name in it  ) 
eg.     [   
            'testfile0.txt',
            'testfile1.txt',
            'testfile2.txt',
            'testfile3.txt',
            'testfile4.txt'
        ]
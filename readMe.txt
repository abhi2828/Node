in this branch we learn who to create file, how to read its data and update data ,rename it and hwo to delete file 

1. using writeFileSync() we create file.

2. using readFile() to read data from file it takes three parameters
file_path,utf8 & callback function to handle error.

3.to update data we used appendFile(), which also takes 3 parameters
file_path,content we need to add & callback function to handle error.

4.to rename file we used rename(), which also takes 3 parameters
file_path,new file name & callback function to handle error.

5.to delete file we use unlinkSync() which take only one argument path_name
to delete file.
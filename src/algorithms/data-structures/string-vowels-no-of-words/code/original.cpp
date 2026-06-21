#include<iostream>
int main()
{
    char stringVowelsSampleWord[11]={'T','a','j',' ',' ','m','a','h','a','l','\0'};
    int stringVowelsVCount=0,stringVowelsCCount=0;
    for(int scanIndex=0;stringVowelsSampleWord[scanIndex]!='\0';scanIndex++)
    {
        if(stringVowelsSampleWord[scanIndex]=='a'||stringVowelsSampleWord[scanIndex]=='e'|| stringVowelsSampleWord[scanIndex]=='i'|| stringVowelsSampleWord[scanIndex]=='o' || stringVowelsSampleWord[scanIndex]=='u' || 
        stringVowelsSampleWord[scanIndex]=='A'|| stringVowelsSampleWord[scanIndex]=='E' || stringVowelsSampleWord[scanIndex]=='I'|| stringVowelsSampleWord[scanIndex]=='O' || stringVowelsSampleWord[scanIndex]=='U')
        stringVowelsVCount++;//counting as vowel
        
        else if(stringVowelsSampleWord[scanIndex]>=65 && stringVowelsSampleWord[scanIndex]<=90||stringVowelsSampleWord[scanIndex]>=97 && stringVowelsSampleWord[scanIndex]<122)
            stringVowelsCCount++;//counting consonent
    }
    std::cout<<"number of vowels = "<<stringVowelsVCount<<"\n"<<"number of consonent = "<<stringVowelsCCount<<std::endl;

    //count words
    int stringVowelsSpace=0;
    for(int scanIndex=0;stringVowelsSampleWord[scanIndex]!='\0';scanIndex++)
    {
        if(stringVowelsSampleWord[scanIndex]==' '&& stringVowelsSampleWord[scanIndex-1]!=' ')//checking if its a space and not white space
            stringVowelsSpace++;//counting space
    }
    std::cout<<"number of words = "<<stringVowelsSpace+1;;
    
    return 0;
}
#include<iostream>
int main()
{
    char stringVowelsState[11]={'T','a','j',' ',' ','m','a','h','a','l','\0'};
    int stringVowelsState2=0,stringVowelsState3=0;
    for(int stringVowelsScanIndex=0;stringVowelsState[stringVowelsScanIndex]!='\0';stringVowelsScanIndex++)
    {
        if(stringVowelsState[stringVowelsScanIndex]=='a'||stringVowelsState[stringVowelsScanIndex]=='e'|| stringVowelsState[stringVowelsScanIndex]=='i'|| stringVowelsState[stringVowelsScanIndex]=='o' || stringVowelsState[stringVowelsScanIndex]=='u' || 
        stringVowelsState[stringVowelsScanIndex]=='A'|| stringVowelsState[stringVowelsScanIndex]=='E' || stringVowelsState[stringVowelsScanIndex]=='I'|| stringVowelsState[stringVowelsScanIndex]=='O' || stringVowelsState[stringVowelsScanIndex]=='U')
        stringVowelsState2++;//counting as vowel
        
        else if(stringVowelsState[stringVowelsScanIndex]>=65 && stringVowelsState[stringVowelsScanIndex]<=90||stringVowelsState[stringVowelsScanIndex]>=97 && stringVowelsState[stringVowelsScanIndex]<122)
            stringVowelsState3++;//counting consonent
    }
    std::cout<<"number of vowels = "<<stringVowelsState2<<"\n"<<"number of consonent = "<<stringVowelsState3<<std::endl;

    //count words
    int stringVowelsState4=0;
    for(int stringVowelsScanIndex=0;stringVowelsState[stringVowelsScanIndex]!='\0';stringVowelsScanIndex++)
    {
        if(stringVowelsState[stringVowelsScanIndex]==' '&& stringVowelsState[stringVowelsScanIndex-1]!=' ')//checking if its a space and not white space
            stringVowelsState4++;//counting space
    }
    std::cout<<"number of words = "<<stringVowelsState4+1;;
    
    return 0;
}
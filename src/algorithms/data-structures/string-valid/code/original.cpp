#include<iostream>
bool valid(char stringValidState[])
{
    for(int stringValidScanIndex=0;stringValidState[stringValidScanIndex]!='\0';stringValidScanIndex++)
    {
        if(!(stringValidState[stringValidScanIndex]>=65 && stringValidState[stringValidScanIndex]<=90) && !(stringValidState[stringValidScanIndex]>=97 && stringValidState[stringValidScanIndex]<=122) && !(stringValidState[stringValidScanIndex]>=48 && stringValidState[stringValidScanIndex]<=57))
            return false;
    }
    return true;
}
int main()
{
    char stringValidState[] ="An3ura835)6HHHg";
    std::cout<<valid(stringValidState);
    return 0;
}
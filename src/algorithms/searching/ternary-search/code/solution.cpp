// Ternary Search
// Route: /algorithms/searching/ternary-search

#include <functional>
using namespace std;

double ternarySearch(double low, double high, const function<double(double)>& evaluate, double precision = 1e-7) {
    while (high - low > precision) {
        double mid1 = low + (high - low) / 3.0;
        double mid2 = high - (high - low) / 3.0;
        if (evaluate(mid1) < evaluate(mid2)) low = mid1;
        else high = mid2;
    }
    return (low + high) / 2.0;
}

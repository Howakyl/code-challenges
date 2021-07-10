import math

def maxSubArraySum(a, size):

    max_so_far = a[0]
    curr_max = a[0]

    for i in range(1,size):
        curr_max = max(a[i], curr_max + a[i])
        max_so_far = max(max_so_far, curr_max)
    return max_so_far

a = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
# print(maxSubArraySum(a, len(a)))
####################
def list_squared(min_number, max_number):
    answers = []
    i = min_number
    for i in range(i ,max_number + 1):
        divisors = []
        k = 1
        for k in range(k, max_number + 1):
            if (i % k == 0):
                divisors.append(k**2)
                # print(divisors)
        sum_num = sum(divisors)

        if (math.sqrt(sum_num) % 2 == 0):
            # print(f'squared number! {sum_num}')
            answers.append([i, sum_num])
    return answers



# print(list_squared(1, 250))

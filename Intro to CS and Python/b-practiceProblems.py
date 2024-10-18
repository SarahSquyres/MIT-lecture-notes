annual_salary = float(input("Enter your annual salary (should be a number) "))
portion_saved = float(input("Enter the percentage of salary to be saved (should be in decimal form) "))
total_cost = float(input("Enter total cost of your dream home (should be a number) "))

portion_down_payment = total_cost*0.25
monthly_salary = annual_salary/12
current_savings = 0
r = 0.04/12

months = 1

while current_savings < portion_down_payment:
     current_savings += portion_saved*monthly_salary
     current_savings += current_savings * r
     months += 1

print("Months to meet downpayment", months)
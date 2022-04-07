let nums = [];
for (let i = 0; i < 2; i++) {
    nums[i] = parseFloat(prompt("Digite o numero " + (i+1)));
}
 alert(nums[0] + " + " + nums[1] + " = " + (nums[0]+nums[1]) +
        "\n" + nums[0] + " - " + nums[1] + " = " + (nums[0]-nums[1]) +
        "\n" + nums[0] + " * " + nums[1] + " = " + (nums[0]*nums[1]) +
        "\n" + nums[0] + " / " + nums[1] + " = " + (nums[0]/nums[1]) +
        "\n" + nums[0] + " % " + nums[1] + " = " + (nums[0]%nums[1]));
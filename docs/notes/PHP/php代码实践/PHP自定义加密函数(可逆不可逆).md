### 一、第一种针对于ID的可逆加密函数，也可以用作于邀请码之类的，解密后的数据比较简单

示例：

```php
lockcode(28); // 返回:000X
unlockcode('000X'); // 返回: 28
```



```php
//加密函数
function lockcode($code) {
    static $source_string = 'E5FCDG3HQA4B1NOPIJ2RSTUV67MWX89KLYZ';
    $num = $code;
    $code = '';
    while ( $num > 0) {
        $mod = $num % 35;
        $num = ($num - $mod) / 35;
        $code = $source_string[$mod].$code;
    }
    if(empty($code[3]))
        $code = str_pad($code,4,'0',STR_PAD_LEFT);
    return $code;
}
//解密函数
function unlockcode($code) {
    static $source_string = 'E5FCDG3HQA4B1NOPIJ2RSTUV67MWX89KLYZ';
    if (strrpos($code, '0') !== false)
        $code = substr($code, strrpos($code, '0')+1);
    $len = strlen($code);
    $code = strrev($code);
    $num = 0;
    for ($i=0; $i < $len; $i++) {
        $num += strpos($source_string, $code[$i]) * pow(35, $i);
    }
    return $num;
}
```

### 二、第二种是加密函数是网上搜索来的，很好用，可逆加密，支持盐值参数

示例：

```php
encrypt('abcd','1234'); // 返回: nkiV93IfJ
decrypt('nkiV93IfJ','1234'); // 返回: abcd
```

```php
//加密函数  
function encrypt($data,$key='CHENI'){  
 $chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";  
 $nh = rand(0,64);  
 $ch = $chars[$nh];  
 $mdKey = md5($key.$ch);  
 $mdKey = substr($mdKey,$nh%8, $nh%8+7);  
 $data= base64_encode($data);  
 $tmp = '';  
 $i=0;$j=0;$k = 0;  
 for ($i=0; $i<strlen($data); $i++) {  
 $k = $k == strlen($mdKey) ? 0 : $k;  
 $j = ($nh+strpos($chars,$data[$i])+ord($mdKey[$k++]))%64;  
 $tmp .= $chars[$j];  
 }  
 return urlencode($ch.$tmp);  
}
//解密函数  
function decrypt($data,$key='CHENI'){
 $txt = urldecode($data);  
 $chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";  
 $ch = $txt[0];  
 $nh = strpos($chars,$ch);  
 $mdKey = md5($key.$ch);  
 $mdKey = substr($mdKey,$nh%8, $nh%8+7);  
 $txt = substr($txt,1);  
 $tmp = '';  
 $i=0;$j=0; $k = 0;  
 for ($i=0; $i<strlen($txt); $i++) {  
 $k = $k == strlen($mdKey) ? 0 : $k;  
 $j = strpos($chars,$txt[$i])-$nh - ord($mdKey[$k++]);  
 while ($j<0) $j+=64;  
 $tmp .= $chars[$j];  
 }  
 return base64_decode($tmp);  
}
```





### 三、第三种跟上面的比较类似，也支持盐值参数

```php
function encrypt($data, $key)  {  
 $char="";
 $str="";
 $key =   md5($key);  
 $x =   0;  
 $len =   strlen($data);  
 $l =   strlen($key);  
 for ($i = 0; $i < $len; $i++) {  
 if ($x == $l) { $x = 0; }  
 $char .= $key{$x};  
 $x++;  
 }  
 for ($i = 0; $i < $len; $i++){  
 $str .= chr(ord($data{$i}) + (ord($char{$i})) % 256);  
 }  
 return base64_encode($str);  
}  
function decrypt($data, $key) {  
 $key = md5($key);  
 $x = 0;  
 $data = base64_decode($data);  
 $len = strlen($data);  
 $l = strlen($key);  
 for ($i = 0; $i < $len; $i++) {  
 if ($x == $l){ $x = 0;}  
 $char .= substr($key, $x, 1);  
 $x++;  
 }  
 for ($i = 0; $i < $len; $i++){  
 if (ord(substr($data, $i, 1)) < ord(substr($char, $i, 1))){  
 $str .= chr((ord(substr($data, $i, 1)) + 256) - ord(substr($char, $i, 1)));  
 }else{  
 $str .= chr(ord(substr($data, $i, 1)) - ord(substr($char, $i, 1)));  
 }  
 }  
 return $str;  
}
```





### 四、这个是我用过最好用的一个了，discuz中使用的加密解密算法

```php
//加密算法
 function authcode($string,$key='',$operation=false,$expiry=0){
 $ckey_length = 4;
 $key = md5($key ? $key : DEFAULT_KEYS);
 $keya = md5(substr($key, 0, 16));
 $keyb = md5(substr($key, 16, 16));
 $keyc = $ckey_length ? ($operation? substr($string, 0, $ckey_length):substr(md5(microtime()), -$ckey_length)) : '';
 $cryptkey = $keya.md5($keya.$keyc);
 $key_length = strlen($cryptkey);
 $string = $operation? base64_decode(substr($string, $ckey_length)) :
 sprintf('%010d', $expiry ? $expiry + time() : 0).substr(md5($string.$keyb), 0, 16).$string;
 $string_length = strlen($string);
 $result = '';
 $box = range(0, 255);
 $rndkey = array();
 for($i = 0; $i <= 255; $i++) {
 $rndkey[$i] = ord($cryptkey[$i % $key_length]);
 }
 for($j = $i = 0; $i < 256; $i++) {
 $j = ($j + $box[$i] + $rndkey[$i]) % 256;
 $tmp = $box[$i];
 $box[$i] = $box[$j];
 $box[$j] = $tmp;
 }
 for($a = $j = $i = 0; $i < $string_length; $i++) {
 $a = ($a + 1) % 256;
 $j = ($j + $box[$a]) % 256;
 $tmp = $box[$a];
 $box[$a] = $box[$j];
 $box[$j] = $tmp;
 $result .= chr(ord($string[$i]) ^ ($box[($box[$a] + $box[$j]) % 256]));
 }
 if($operation) {
 if((substr($result, 0, 10) == 0 || substr($result, 0, 10) - time() > 0) &&
 substr($result, 10, 16) == substr(md5(substr($result, 26).$keyb), 0, 16)) {
 return substr($result, 26);
 } else {
 return '';
 }
 } else {
 return $keyc.str_replace('=', '', base64_encode($result));
 }
 }
 echo authcode('123456','key');
 echo '<br>';
 echo authcode('7d49kn9k07uSBZvha8as+/qm4UoLfpy88PFg12glPeDtlzc','key',true); 
```



参考:  [知乎文章:四种好用的PHP自定义加密函数（可逆/不可逆）](https://zhuanlan.zhihu.com/p/101616865)